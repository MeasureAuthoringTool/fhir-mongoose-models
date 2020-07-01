const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const ImmunizationProtocolAppliedSchema = BackboneElementSchemaFunction({
  series: PrimitiveStringSchema,
  authority: ReferenceSchema,
  targetDisease: [CodeableConceptSchema],
  doseNumberPositiveInt: PrimitivePositiveIntSchema,
  doseNumberString: PrimitiveStringSchema,
  seriesDosesPositiveInt: PrimitivePositiveIntSchema,
  seriesDosesString: PrimitiveStringSchema,
  typeName: { type: String, default: 'ImmunizationProtocolApplied' },
  _type: { type: String, default: 'FHIR::ImmunizationProtocolApplied' },
});

class ImmunizationProtocolApplied extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationProtocolAppliedSchema);
    this.typeName = 'ImmunizationProtocolApplied';
    this._type = 'FHIR::ImmunizationProtocolApplied';
  }
}

module.exports.ImmunizationProtocolAppliedSchema = ImmunizationProtocolAppliedSchema;
module.exports.ImmunizationProtocolApplied = ImmunizationProtocolApplied;
