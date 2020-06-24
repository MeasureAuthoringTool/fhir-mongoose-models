const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ChargeItemPerformerSchema = BackboneElementSchemaFunction({
   function : CodeableConceptSchema,
   actor : ReferenceSchema,
   fhirTitle: { type: String, default: 'ChargeItemPerformer' },
});

class ChargeItemPerformer extends mongoose.Document {
  constructor(object) {
    super(object, ChargeItemPerformerSchema);
    this._type = 'FHIR::ChargeItemPerformer';
  }
};


module.exports.ChargeItemPerformerSchema = ChargeItemPerformerSchema;
module.exports.ChargeItemPerformer = ChargeItemPerformer;
