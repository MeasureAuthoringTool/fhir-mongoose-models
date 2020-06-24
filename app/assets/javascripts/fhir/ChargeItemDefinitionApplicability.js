const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ChargeItemDefinitionApplicabilitySchema = BackboneElementSchemaFunction({
   description : String,
   language : String,
   expression : String,
   fhirTitle: { type: String, default: 'ChargeItemDefinitionApplicability' },
});

class ChargeItemDefinitionApplicability extends mongoose.Document {
  constructor(object) {
    super(object, ChargeItemDefinitionApplicabilitySchema);
    this._type = 'FHIR::ChargeItemDefinitionApplicability';
  }
};


module.exports.ChargeItemDefinitionApplicabilitySchema = ChargeItemDefinitionApplicabilitySchema;
module.exports.ChargeItemDefinitionApplicability = ChargeItemDefinitionApplicability;
