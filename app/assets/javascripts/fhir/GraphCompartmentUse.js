const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const GraphCompartmentUseSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'GraphCompartmentUse' },
  _type: { type: String, default: 'FHIR::GraphCompartmentUse' },
});

class GraphCompartmentUse extends mongoose.Document {
  constructor(object) {
    super(object, GraphCompartmentUseSchema);
    this.typeName = 'GraphCompartmentUse';
    this._type = 'FHIR::GraphCompartmentUse';
  }
}

module.exports.GraphCompartmentUseSchema = GraphCompartmentUseSchema;
module.exports.GraphCompartmentUse = GraphCompartmentUse;
