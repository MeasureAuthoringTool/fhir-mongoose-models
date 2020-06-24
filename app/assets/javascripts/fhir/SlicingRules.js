const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SlicingRulesSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'SlicingRules' },
});

class SlicingRules extends mongoose.Document {
  constructor(object) {
    super(object, SlicingRulesSchema);
    this._type = 'FHIR::SlicingRules';
  }
};


module.exports.SlicingRulesSchema = SlicingRulesSchema;
module.exports.SlicingRules = SlicingRules;
