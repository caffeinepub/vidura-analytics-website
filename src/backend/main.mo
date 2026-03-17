import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";

actor {
  type SampleType = { #extract; #product; #water; #food; #swab; #data };
  type Turnaround = { #standard; #urgent };
  type TestCategory = { #pesticides; #mycotoxins; #microbiology; #heavyMetals; #residualSolvents; #nutrients; #vitamins; #hormones };

  type SampleSubmission = {
    id : Text;
    name : Text;
    organization : Text;
    email : Text;
    phone : Text;
    city : Text;
    sampleType : SampleType;
    testsRequested : [TestCategory];
    sampleDetails : {
      matrix : Text;
      solvent : Text;
      concentration : Text;
      preservatives : Text;
    };
    quantityAvailable : Nat;
    preferredTurnaround : Turnaround;
    notes : Text;
    complianceCheckboxes : {
      noHumanSamples : Bool;
      nonClinicalUse : Bool;
      sampleSpecificResults : Bool;
    };
    timestamp : Int;
  };

  type ContactSubmission = {
    id : Text;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Int;
  };

  module SampleSubmission {
    public func compare(s1 : SampleSubmission, s2 : SampleSubmission) : Order.Order {
      Text.compare(s1.id, s2.id);
    };
  };

  module ContactSubmission {
    public func compare(c1 : ContactSubmission, c2 : ContactSubmission) : Order.Order {
      Text.compare(c1.id, c2.id);
    };
  };

  let sampleSubmissions = Map.empty<Text, SampleSubmission>();
  let contactSubmissions = Map.empty<Text, ContactSubmission>();

  public shared ({ caller }) func submitSample(
    name : Text,
    organization : Text,
    email : Text,
    phone : Text,
    city : Text,
    sampleType : SampleType,
    testsRequested : [TestCategory],
    sampleDetails : { matrix : Text; solvent : Text; concentration : Text; preservatives : Text },
    quantityAvailable : Nat,
    preferredTurnaround : Turnaround,
    notes : Text,
    complianceCheckboxes : { noHumanSamples : Bool; nonClinicalUse : Bool; sampleSpecificResults : Bool }
  ) : async () {
    if (
      not complianceCheckboxes.noHumanSamples or not complianceCheckboxes.nonClinicalUse or not complianceCheckboxes.sampleSpecificResults
    ) {
      Runtime.trap("All compliance checkboxes must be checked");
    };

    let id = Time.now().toText() # name;
    let submission : SampleSubmission = {
      id;
      name;
      organization;
      email;
      phone;
      city;
      sampleType;
      testsRequested;
      sampleDetails;
      quantityAvailable;
      preferredTurnaround;
      notes;
      complianceCheckboxes;
      timestamp = Time.now();
    };

    sampleSubmissions.add(id, submission);
  };

  public shared ({ caller }) func submitContact(name : Text, email : Text, phone : Text, message : Text) : async () {
    let id = Time.now().toText() # name;
    let submission : ContactSubmission = {
      id;
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };

    contactSubmissions.add(id, submission);
  };

  public query ({ caller }) func getSampleSubmissions() : async [SampleSubmission] {
    sampleSubmissions.values().toArray().sort();
  };

  public query ({ caller }) func getContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray().sort();
  };
};
