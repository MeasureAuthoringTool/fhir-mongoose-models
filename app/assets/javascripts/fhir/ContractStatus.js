const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContractStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ContractStatus' },
});

class ContractStatus extends mongoose.Document {
  constructor(object) {
    super(object, ContractStatusSchema);
    this._type = 'FHIR::ContractStatus';
  }
};


module.exports.ContractStatusSchema = ContractStatusSchema;
module.exports.ContractStatus = ContractStatus;
