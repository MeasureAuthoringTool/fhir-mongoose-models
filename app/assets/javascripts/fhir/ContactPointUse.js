const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContactPointUseSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ContactPointUse' },
});

class ContactPointUse extends mongoose.Document {
  constructor(object) {
    super(object, ContactPointUseSchema);
    this._type = 'FHIR::ContactPointUse';
  }
};


module.exports.ContactPointUseSchema = ContactPointUseSchema;
module.exports.ContactPointUse = ContactPointUse;
