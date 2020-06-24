const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GraphCompartmentUseSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'GraphCompartmentUse' },
});

class GraphCompartmentUse extends mongoose.Document {
  constructor(object) {
    super(object, GraphCompartmentUseSchema);
    this._type = 'FHIR::GraphCompartmentUse';
  }
};


module.exports.GraphCompartmentUseSchema = GraphCompartmentUseSchema;
module.exports.GraphCompartmentUse = GraphCompartmentUse;
