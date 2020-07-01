const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExpressionSchema } = require('./Expression');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const MeasureSupplementalDataSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  usage: [CodeableConceptSchema],
  description: PrimitiveStringSchema,
  criteria: ExpressionSchema,
  typeName: { type: String, default: 'MeasureSupplementalData' },
  _type: { type: String, default: 'FHIR::MeasureSupplementalData' },
});

class MeasureSupplementalData extends mongoose.Document {
  constructor(object) {
    super(object, MeasureSupplementalDataSchema);
    this.typeName = 'MeasureSupplementalData';
    this._type = 'FHIR::MeasureSupplementalData';
  }
}

module.exports.MeasureSupplementalDataSchema = MeasureSupplementalDataSchema;
module.exports.MeasureSupplementalData = MeasureSupplementalData;
