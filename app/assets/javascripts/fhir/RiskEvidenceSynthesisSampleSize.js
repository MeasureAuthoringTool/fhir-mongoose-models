const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const RiskEvidenceSynthesisSampleSizeSchema = BackboneElementSchemaFunction({
  description: PrimitiveStringSchema,
  numberOfStudies: PrimitiveIntegerSchema,
  numberOfParticipants: PrimitiveIntegerSchema,
  typeName: { type: String, default: 'RiskEvidenceSynthesisSampleSize' },
  _type: { type: String, default: 'FHIR::RiskEvidenceSynthesisSampleSize' },
});

class RiskEvidenceSynthesisSampleSize extends mongoose.Document {
  constructor(object) {
    super(object, RiskEvidenceSynthesisSampleSizeSchema);
    this.typeName = 'RiskEvidenceSynthesisSampleSize';
    this._type = 'FHIR::RiskEvidenceSynthesisSampleSize';
  }
}

module.exports.RiskEvidenceSynthesisSampleSizeSchema = RiskEvidenceSynthesisSampleSizeSchema;
module.exports.RiskEvidenceSynthesisSampleSize = RiskEvidenceSynthesisSampleSize;
