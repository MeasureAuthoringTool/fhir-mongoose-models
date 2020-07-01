const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const ImmunizationReactionSchema = BackboneElementSchemaFunction({
  date: PrimitiveDateTimeSchema,
  detail: ReferenceSchema,
  reported: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'ImmunizationReaction' },
  _type: { type: String, default: 'FHIR::ImmunizationReaction' },
});

class ImmunizationReaction extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationReactionSchema);
    this.typeName = 'ImmunizationReaction';
    this._type = 'FHIR::ImmunizationReaction';
  }
}

module.exports.ImmunizationReactionSchema = ImmunizationReactionSchema;
module.exports.ImmunizationReaction = ImmunizationReaction;
