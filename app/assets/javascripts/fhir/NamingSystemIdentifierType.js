const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NamingSystemIdentifierTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'NamingSystemIdentifierType' },
});

class NamingSystemIdentifierType extends mongoose.Document {
  constructor(object) {
    super(object, NamingSystemIdentifierTypeSchema);
    this._type = 'FHIR::NamingSystemIdentifierType';
  }
};


module.exports.NamingSystemIdentifierTypeSchema = NamingSystemIdentifierTypeSchema;
module.exports.NamingSystemIdentifierType = NamingSystemIdentifierType;
