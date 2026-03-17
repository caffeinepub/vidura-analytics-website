import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface SampleSubmission {
    id: string;
    complianceCheckboxes: {
        nonClinicalUse: boolean;
        sampleSpecificResults: boolean;
        noHumanSamples: boolean;
    };
    city: string;
    sampleDetails: {
        solvent: string;
        concentration: string;
        preservatives: string;
        matrix: string;
    };
    name: string;
    sampleType: SampleType;
    email: string;
    notes: string;
    timestamp: bigint;
    organization: string;
    phone: string;
    testsRequested: Array<TestCategory>;
    preferredTurnaround: Turnaround;
    quantityAvailable: bigint;
}
export enum SampleType {
    data = "data",
    food = "food",
    swab = "swab",
    extract = "extract",
    water = "water",
    product = "product"
}
export enum TestCategory {
    microbiology = "microbiology",
    pesticides = "pesticides",
    mycotoxins = "mycotoxins",
    heavyMetals = "heavyMetals",
    hormones = "hormones",
    nutrients = "nutrients",
    residualSolvents = "residualSolvents",
    vitamins = "vitamins"
}
export enum Turnaround {
    urgent = "urgent",
    standard = "standard"
}
export interface backendInterface {
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getSampleSubmissions(): Promise<Array<SampleSubmission>>;
    submitContact(name: string, email: string, phone: string, message: string): Promise<void>;
    submitSample(name: string, organization: string, email: string, phone: string, city: string, sampleType: SampleType, testsRequested: Array<TestCategory>, sampleDetails: {
        solvent: string;
        concentration: string;
        preservatives: string;
        matrix: string;
    }, quantityAvailable: bigint, preferredTurnaround: Turnaround, notes: string, complianceCheckboxes: {
        nonClinicalUse: boolean;
        sampleSpecificResults: boolean;
        noHumanSamples: boolean;
    }): Promise<void>;
}
