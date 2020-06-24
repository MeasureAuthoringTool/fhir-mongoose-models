const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImmunizationReactionSchema = BackboneElementSchemaFunction({
   date : DateTime,
   detail : ReferenceSchema,
   reported : Boolean,
   fhirTitle: { type: String, default: 'ImmunizationReaction' },
});

class ImmunizationReaction extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationReactionSchema);
    this._type = 'FHIR::ImmunizationReaction';
  }
};


module.exports.ImmunizationReactionSchema = ImmunizationReactionSchema;
module.exports.ImmunizationReaction = ImmunizationReaction;
