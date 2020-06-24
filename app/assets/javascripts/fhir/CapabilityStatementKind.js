const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CapabilityStatementKindSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'CapabilityStatementKind' },
});

class CapabilityStatementKind extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementKindSchema);
    this._type = 'FHIR::CapabilityStatementKind';
  }
};


module.exports.CapabilityStatementKindSchema = CapabilityStatementKindSchema;
module.exports.CapabilityStatementKind = CapabilityStatementKind;
