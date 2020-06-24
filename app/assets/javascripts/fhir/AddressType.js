const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AddressTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'AddressType' },
});

class AddressType extends mongoose.Document {
  constructor(object) {
    super(object, AddressTypeSchema);
    this._type = 'FHIR::AddressType';
  }
};


module.exports.AddressTypeSchema = AddressTypeSchema;
module.exports.AddressType = AddressType;
