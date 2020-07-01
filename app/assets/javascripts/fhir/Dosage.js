const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DosageDoseAndRateSchema } = require('./DosageDoseAndRate');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { RatioSchema } = require('./Ratio');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { TimingSchema } = require('./Timing');

const DosageSchema = BackboneElementSchemaFunction({
  sequence: PrimitiveIntegerSchema,
  text: PrimitiveStringSchema,
  additionalInstruction: [CodeableConceptSchema],
  patientInstruction: PrimitiveStringSchema,
  timing: TimingSchema,
  asNeededBoolean: PrimitiveBooleanSchema,
  asNeededCodeableConcept: CodeableConceptSchema,
  site: CodeableConceptSchema,
  route: CodeableConceptSchema,
  method: CodeableConceptSchema,
  doseAndRate: [DosageDoseAndRateSchema],
  maxDosePerPeriod: RatioSchema,
  maxDosePerAdministration: SimpleQuantitySchema,
  maxDosePerLifetime: SimpleQuantitySchema,
  typeName: { type: String, default: 'Dosage' },
  _type: { type: String, default: 'FHIR::Dosage' },
});

class Dosage extends mongoose.Document {
  constructor(object) {
    super(object, DosageSchema);
    this.typeName = 'Dosage';
    this._type = 'FHIR::Dosage';
  }
}

module.exports.DosageSchema = DosageSchema;
module.exports.Dosage = Dosage;
