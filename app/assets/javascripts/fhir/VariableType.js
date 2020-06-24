const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const VariableTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'VariableType' },
});

class VariableType extends mongoose.Document {
  constructor(object) {
    super(object, VariableTypeSchema);
    this._type = 'FHIR::VariableType';
  }
};


module.exports.VariableTypeSchema = VariableTypeSchema;
module.exports.VariableType = VariableType;
