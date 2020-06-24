const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GraphCompartmentRuleSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'GraphCompartmentRule' },
});

class GraphCompartmentRule extends mongoose.Document {
  constructor(object) {
    super(object, GraphCompartmentRuleSchema);
    this._type = 'FHIR::GraphCompartmentRule';
  }
};


module.exports.GraphCompartmentRuleSchema = GraphCompartmentRuleSchema;
module.exports.GraphCompartmentRule = GraphCompartmentRule;
