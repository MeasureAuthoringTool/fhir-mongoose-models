const mongoose = require('mongoose/browser');
const { AdverseEventSuspectEntityCausalitySchema } = require('./AdverseEventSuspectEntityCausality');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');

const AdverseEventSuspectEntitySchema = BackboneElementSchemaFunction({
  instance: ReferenceSchema,
  causality: [AdverseEventSuspectEntityCausalitySchema],
  typeName: { type: String, default: 'AdverseEventSuspectEntity' },
  _type: { type: String, default: 'FHIR::AdverseEventSuspectEntity' },
});

class AdverseEventSuspectEntity extends mongoose.Document {
  constructor(object) {
    super(object, AdverseEventSuspectEntitySchema);
    this.typeName = 'AdverseEventSuspectEntity';
    this._type = 'FHIR::AdverseEventSuspectEntity';
  }
}

module.exports.AdverseEventSuspectEntitySchema = AdverseEventSuspectEntitySchema;
module.exports.AdverseEventSuspectEntity = AdverseEventSuspectEntity;
