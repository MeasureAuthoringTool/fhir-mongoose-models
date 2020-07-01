const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const GraphCompartmentRuleSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'GraphCompartmentRule' },
  _type: { type: String, default: 'FHIR::GraphCompartmentRule' },
});

class GraphCompartmentRule extends mongoose.Document {
  constructor(object) {
    super(object, GraphCompartmentRuleSchema);
    this.typeName = 'GraphCompartmentRule';
    this._type = 'FHIR::GraphCompartmentRule';
  }
}

module.exports.GraphCompartmentRuleSchema = GraphCompartmentRuleSchema;
module.exports.GraphCompartmentRule = GraphCompartmentRule;
