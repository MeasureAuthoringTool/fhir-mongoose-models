const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const IdentifierUseSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'IdentifierUse' },
});

class IdentifierUse extends mongoose.Document {
  constructor(object) {
    super(object, IdentifierUseSchema);
    this._type = 'FHIR::IdentifierUse';
  }
};


module.exports.IdentifierUseSchema = IdentifierUseSchema;
module.exports.IdentifierUse = IdentifierUse;
