const FHIR = require("./../app/assets/javascripts/AllDataElements");
const CQM = require("./../app/assets/javascripts/cqm/AllCQMModels");
const cqm_resource_patient = require("./fixtures/cqm_patients.json");
const cqm_resource_measure = require("./fixtures/cqm_measures.json");
const cqm_resource_measure2 = require("./fixtures/cqm_measures2.json");
const fhir_resource_library = require("./fixtures/fhir_resources.json");
const cqm_resource_valueset = require("./fixtures/cqm_value_sets.json");
const cqm_measure_package = require("./fixtures/cqm_measure_packages.json");

describe("CQM-FHIR", () => {
  describe("FHIR model", () => {
    test("can construct a FHIR measure", () => {
      let measure = new FHIR.Measure({
        url: new FHIR.PrimitiveUri({ value: "http://hl7.org/xyz" }),
        identifier: [new FHIR.Identifier({ system: "system", value: "Value" })],
        version: new FHIR.PrimitiveString({ value: "v2.1.023" }),
        name: new FHIR.PrimitiveString({ value: "TestMeasure001" }),
        title: new FHIR.PrimitiveString({ value: "CMS99v2" }),
        subtitle: new FHIR.PrimitiveString({ value: "TestMeasure001Subtitle" }),
        copyright: new FHIR.PrimitiveString({ value: "©2020 CMS.gov" }),
        approvalDate: new Date(),
        lastReviewDate: new Date(),
      });
      let err = measure.validateSync();
      expect(err).toBeUndefined();
      expect(measure.url.value).toEqual("http://hl7.org/xyz");
      expect(measure.title.value).toEqual("CMS99v2");
      expect(measure.identifier.length).toEqual(1);
      expect(measure.approvalDate).toBeDefined();
      expect(measure.lastReviewDate).toBeDefined();
    });
  });

  describe("CQM model", () => {
    function createCqmMeasure() {
      return new CQM.CqmMeasure({
        fhir_measure: new FHIR.Measure({
          url: new FHIR.PrimitiveUri({ value: "http://hl7.org/xyz" }),
          identifier: [
            new FHIR.Identifier({ system: "system", value: "Value" }),
          ],
          version: new FHIR.PrimitiveString({ value: "v2.1.023" }),
          name: new FHIR.PrimitiveString({ value: "TestMeasure001" }),
          title: new FHIR.PrimitiveString({ value: "CMS99v2" }),
          subtitle: new FHIR.PrimitiveString({
            value: "TestMeasure001Subtitle",
          }),
          copyright: new FHIR.PrimitiveString({ value: "©2020 CMS.gov" }),
          approvalDate: new Date(),
          lastReviewDate: new Date(),
        }),
      });
    }

    test("can instantiate a CQM Model from JSON", () => {
      let cqmMeasure = new CQM.CqmMeasure(cqm_resource_measure);
      expect(cqmMeasure.validateSync()).toBeUndefined();
      expect(cqmMeasure.fhir_measure.name.value).toEqual("EXM104");
    });

    test("can instantiate a CQM Model from JSON #2", () => {
      let cqmMeasure = new CQM.CqmMeasure(cqm_resource_measure2);
      expect(cqmMeasure.validateSync()).toBeUndefined();
      expect(cqmMeasure.fhir_measure.name.value).toEqual("EXM_104");
    });

    test("can construct a CQM measure", () => {
      let cqmMeasure = createCqmMeasure();

      cqmMeasure.cql_libraries = [new FHIR.Library({})];
      cqmMeasure.value_sets = [new FHIR.ValueSet({})];

      let err = cqmMeasure.validateSync();
      expect(err).toBeUndefined();
      expect(cqmMeasure.cql_libraries).toBeDefined();
      expect(cqmMeasure.cql_libraries.length).toEqual(1);
      expect(cqmMeasure.fhir_measure).toBeDefined();
      expect(cqmMeasure.value_sets.length).toEqual(1);
    });

    test("can construct a measure with adverse event", () => {
      let measure = createCqmMeasure();
      //TODO: find a better place for AdverseEvent(s)
      measure.source_data_criteria = [
        new FHIR.AdverseEvent(),
        new FHIR.AdverseEvent(),
        new FHIR.AdverseEvent(),
      ];
      let err = measure.validateSync();
      expect(err).toBeUndefined();
      expect(measure.source_data_criteria.length).toEqual(3);
    });

    test("can construct and save a measure with two population_sets", () => {
      let measure = createCqmMeasure();
      measure.scoring = new FHIR.CodeableConcept({
        coding: new FHIR.Coding({
          code: new FHIR.PrimitiveCode({
            value: "PROPORTION",
          }),
        }),
        text: new FHIR.PrimitiveString({
          value: "PROPORTION",
        }),
      });
      measure.group = [
        new FHIR.MeasureGroup({
          description: new FHIR.PrimitiveString({ value: "Group 1" }),
          population: [
            new FHIR.MeasureGroupPopulation({
              code: new FHIR.CodeableConcept({
                text: new FHIR.PrimitiveString({
                  value: "Initial Population 1",
                }),
              }),
            }),
            new FHIR.MeasureGroupPopulation({
              code: new FHIR.CodeableConcept({
                text: new FHIR.PrimitiveString({
                  value: "Initial Population 2",
                }),
              }),
            }),
          ],
        }),
      ];
      let err = measure.validateSync();
      expect(err).toBeUndefined();
    });

    test("can construct a measure with multiple population_sets and stratifications", () => {
      let measure = createCqmMeasure();
      measure.scoring = new FHIR.CodeableConcept({
        coding: new FHIR.Coding({
          code: new FHIR.PrimitiveCode({
            value: "PROPORTION",
          }),
        }),
        text: new FHIR.PrimitiveString({
          value: "PROPORTION",
        }),
      });
      measure.group = [
        new FHIR.MeasureGroup({
          description: new FHIR.PrimitiveString({ value: "Group 1" }),
          stratifier: [
            new FHIR.MeasureGroupStratifier({
              code: new FHIR.CodeableConcept({
                text: new FHIR.PrimitiveString({
                  value: "PS1 S1",
                }),
              }),
            }),
          ],
        }),
        new FHIR.MeasureGroup({
          description: new FHIR.PrimitiveString({ value: "Group 2" }),
          stratifier: [
            new FHIR.MeasureGroupStratifier({
              code: new FHIR.CodeableConcept({
                text: new FHIR.PrimitiveString({
                  value: "PS2 S1",
                }),
              }),
            }),
          ],
        }),
      ];
      let err = measure.validateSync();
      expect(err).toBeUndefined();

      expect(measure.group.length).toEqual(2);
      expect(measure.group[0].stratifier.length).toEqual(1);
      expect(measure.group[0].stratifier[0]._doc.code.text.value).toEqual(
        "PS1 S1"
      );
      expect(measure.group[1].stratifier.length).toEqual(1);
      expect(measure.group[1].stratifier[0]._doc.code.text.value).toEqual(
        "PS2 S1"
      );
    });

    test("can construct and save a measure with a package", () => {
      let measure = createCqmMeasure();
      let measurePackage = new CQM.CqmMeasurePackage({
        file: "TEST DATA",
      });
      measure.package = measurePackage;
      let err = measurePackage.validateSync();
      expect(err).toBeUndefined();
      err = measure.validateSync();
      expect(err).toBeUndefined();
    });

    test("can construct a measure with a cql library", () => {
      let measure = createCqmMeasure();
      measure.libraries.push(
        new FHIR.Library({
          name: "TestMainLibrary",
          version: "0.1.023",
          content: [
            new FHIR.Attachment({
              contentType: new FHIR.MimeType({ value: "text/cql" }),
              // define "test34": "test35"
              // define "test35": 'testing'
              data: new FHIR.PrimitiveBase64Binary({
                value:
                  "ZGVmaW5lICJ0ZXN0MzQiOiAidGVzdDM1IgpkZWZpbmUgInRlc3QzNSI6ICd0ZXN0aW5nJw==",
              }),
            }),
          ],
        })
      );

      let err = measure.validateSync();
      expect(err).toBeUndefined();
    });
  });

  describe("FHIR patient", () => {
    test("can instantiate a CQM Patient from JSON", () => {
      let cqmPatient = new CQM.CqmPatient(cqm_resource_patient);
      expect(cqmPatient.validateSync()).toBeUndefined();
      expect(cqmPatient.fhir_patient.name[0].family.value).toEqual("Jones");
    });

    test("can construct a FHIR patient", () => {
      let patient = new FHIR.Patient({
        name: new FHIR.HumanName({
          family: new FHIR.PrimitiveString({ value: "AlienFamily3" }),
          given: [new FHIR.PrimitiveString({ value: "Alien3" })],
        }),
        identifier: [
          new FHIR.Identifier({
            system: new FHIR.PrimitiveUri({ value: "alien3" }),
            value: new FHIR.PrimitiveUri({ value: "unidentified" }),
          }),
        ],
        birthDate: new FHIR.PrimitiveDate({ value: new Date() }),
        gender: new FHIR.AdministrativeGender({ value: "AlienLarvae3" }),
        maritalStatus: new FHIR.CodeableConcept({
          coding: new FHIR.Coding({
            code: new FHIR.PrimitiveCode({ value: "THRPRT" }),
          }),
          text: new FHIR.PrimitiveString({ value: "ThirdPartner" }),
        }),
      });
      let err = patient.validateSync();
      expect(err).toBeUndefined();
      expect(patient.identifier.length).toEqual(1);
      expect(patient.identifier[0].system.value).toEqual("alien3");
      expect(patient.identifier[0].value.value).toEqual("unidentified");
      expect(patient.name.length).toEqual(1);
      expect(patient.name[0].family.value).toEqual("AlienFamily3");
      expect(patient.birthDate).toBeDefined();
      expect(patient.gender).toBeDefined();
      expect(patient.gender.value).toEqual("AlienLarvae3");
      expect(patient.maritalStatus).toBeDefined();
      expect(patient.maritalStatus.coding).toBeDefined();
      expect(patient.maritalStatus.coding.length).toEqual(1);
      expect(patient.maritalStatus.coding[0].code.value).toEqual("THRPRT");
    });
  });

  describe("CQM patient", () => {
    function createCqmPatient() {
      return new CQM.CqmPatient({
        fhir_patient: new FHIR.Patient({
          name: new FHIR.HumanName({
            family: new FHIR.PrimitiveString({ value: "AlienFamily3" }),
            given: [new FHIR.PrimitiveString({ value: "Alien3" })],
          }),
          identifier: [
            new FHIR.Identifier({
              system: new FHIR.PrimitiveUri({ value: "alien3" }),
              value: new FHIR.PrimitiveUri({ value: "unidentified" }),
            }),
          ],
        }),
      });
    }

    test("can construct a CQM patient", () => {
      let cqmPatient = createCqmPatient();

      let err = cqmPatient.validateSync();
      expect(err).toBeUndefined();
      expect(cqmPatient.fhir_patient).toBeDefined();
    });
  });

  describe("ValueSet", () => {
    test("can create a FHIR ValueSet", () => {
      expect(new FHIR.ValueSet({}).validateSync()).toBeUndefined();
    });
    test("can create a CQM ValueSet", () => {
      expect(new CQM.CqmValueSet({}).validateSync()).toBeUndefined();
    });

    test("can instantiate a CQM Valueset from JSON", () => {
      let cqmValueSet = new CQM.CqmValueSet(cqm_resource_valueset);
      expect(cqmValueSet.validateSync()).toBeUndefined();
      expect(cqmValueSet.fhirValueSet.length).toEqual(0);
    });
  });

  describe("Library", () => {
    test("can create a FHIR library", () => {
      expect(new FHIR.Library({}).validateSync()).toBeUndefined();
    });
    test("can instantiate from JSON", () => {
      let library = new FHIR.Library(fhir_resource_library);
      expect(library.validateSync()).toBeUndefined();
    });
  });

  describe("MeasurePackage", () => {
    test("can create a CQM MeasurePackage", () => {
      expect(new CQM.CqmMeasurePackage({}).validateSync()).toBeUndefined();
    });
    test("can instantiate a MeasurePackage from JSON", () => {
      let cqmPackage = new CQM.CqmMeasurePackage(cqm_measure_package);
      expect(cqmPackage.validateSync()).toBeUndefined();
    });
  });

});
