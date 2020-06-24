const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ReferenceVersionRulesSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ReferenceVersionRules' },
});

class ReferenceVersionRules extends mongoose.Document {
  constructor(object) {
    super(object, ReferenceVersionRulesSchema);
    this._type = 'FHIR::ReferenceVersionRules';
  }
};


module.exports.ReferenceVersionRulesSchema = ReferenceVersionRulesSchema;
module.exports.ReferenceVersionRules = ReferenceVersionRules;
