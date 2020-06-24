const mongoose = require('mongoose/browser');
const { AddressTypeSchema } = require('./AddressType');
const { AddressUseSchema } = require('./AddressUse');
const { ElementSchema } = require('./Element');
const { PeriodSchema } = require('./Period');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AddressSchema = ElementSchemaFunction({
   use : AddressUseSchema,
   type : AddressTypeSchema,
   text : String,
   line : [String],
   city : String,
   district : String,
   state : String,
   postalCode : String,
   country : String,
   period : PeriodSchema,
   fhirTitle: { type: String, default: 'Address' },
});

class Address extends mongoose.Document {
  constructor(object) {
    super(object, AddressSchema);
    this._type = 'FHIR::Address';
  }
};


module.exports.AddressSchema = AddressSchema;
module.exports.Address = Address;
