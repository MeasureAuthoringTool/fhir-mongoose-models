const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const EffectEvidenceSynthesisSampleSizeSchema = BackboneElementSchemaFunction({
  description: PrimitiveStringSchema,
  numberOfStudies: PrimitiveIntegerSchema,
  numberOfParticipants: PrimitiveIntegerSchema,
  typeName: { type: String, default: 'EffectEvidenceSynthesisSampleSize' },
  _type: { type: String, default: 'FHIR::EffectEvidenceSynthesisSampleSize' },
});

class EffectEvidenceSynthesisSampleSize extends mongoose.Document {
  constructor(object) {
    super(object, EffectEvidenceSynthesisSampleSizeSchema);
    this.typeName = 'EffectEvidenceSynthesisSampleSize';
    this._type = 'FHIR::EffectEvidenceSynthesisSampleSize';
  }
}

module.exports.EffectEvidenceSynthesisSampleSizeSchema = EffectEvidenceSynthesisSampleSizeSchema;
module.exports.EffectEvidenceSynthesisSampleSize = EffectEvidenceSynthesisSampleSize;
