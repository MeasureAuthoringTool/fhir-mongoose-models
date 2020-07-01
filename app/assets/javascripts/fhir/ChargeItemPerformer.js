const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const ChargeItemPerformerSchema = BackboneElementSchemaFunction({
  function: CodeableConceptSchema,
  actor: ReferenceSchema,
  typeName: { type: String, default: 'ChargeItemPerformer' },
  _type: { type: String, default: 'FHIR::ChargeItemPerformer' },
});

class ChargeItemPerformer extends mongoose.Document {
  constructor(object) {
    super(object, ChargeItemPerformerSchema);
    this.typeName = 'ChargeItemPerformer';
    this._type = 'FHIR::ChargeItemPerformer';
  }
}

module.exports.ChargeItemPerformerSchema = ChargeItemPerformerSchema;
module.exports.ChargeItemPerformer = ChargeItemPerformer;
