const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContactPointSystemSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ContactPointSystem' },
});

class ContactPointSystem extends mongoose.Document {
  constructor(object) {
    super(object, ContactPointSystemSchema);
    this._type = 'FHIR::ContactPointSystem';
  }
};


module.exports.ContactPointSystemSchema = ContactPointSystemSchema;
module.exports.ContactPointSystem = ContactPointSystem;
