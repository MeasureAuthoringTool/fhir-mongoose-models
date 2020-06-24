const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const OperationKindSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'OperationKind' },
});

class OperationKind extends mongoose.Document {
  constructor(object) {
    super(object, OperationKindSchema);
    this._type = 'FHIR::OperationKind';
  }
};


module.exports.OperationKindSchema = OperationKindSchema;
module.exports.OperationKind = OperationKind;
