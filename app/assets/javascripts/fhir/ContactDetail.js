const mongoose = require('mongoose/browser');
const { ContactPointSchema } = require('./ContactPoint');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContactDetailSchema = ElementSchemaFunction({
   name : String,
   telecom : [ContactPointSchema],
   fhirTitle: { type: String, default: 'ContactDetail' },
});

class ContactDetail extends mongoose.Document {
  constructor(object) {
    super(object, ContactDetailSchema);
    this._type = 'FHIR::ContactDetail';
  }
};


module.exports.ContactDetailSchema = ContactDetailSchema;
module.exports.ContactDetail = ContactDetail;
