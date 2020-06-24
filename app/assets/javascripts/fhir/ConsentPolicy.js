const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConsentPolicySchema = BackboneElementSchemaFunction({
   authority : String,
   uri : String,
   fhirTitle: { type: String, default: 'ConsentPolicy' },
});

class ConsentPolicy extends mongoose.Document {
  constructor(object) {
    super(object, ConsentPolicySchema);
    this._type = 'FHIR::ConsentPolicy';
  }
};


module.exports.ConsentPolicySchema = ConsentPolicySchema;
module.exports.ConsentPolicy = ConsentPolicy;
