const mongoose = require('mongoose/browser');
const { ContactPointSystemSchema } = require('./ContactPointSystem');
const { ContactPointUseSchema } = require('./ContactPointUse');
const { ElementSchema } = require('./Element');
const { PeriodSchema } = require('./Period');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContactPointSchema = ElementSchemaFunction({
   system : ContactPointSystemSchema,
   value : String,
   use : ContactPointUseSchema,
   rank : Number,
   period : PeriodSchema,
   fhirTitle: { type: String, default: 'ContactPoint' },
});

class ContactPoint extends mongoose.Document {
  constructor(object) {
    super(object, ContactPointSchema);
    this._type = 'FHIR::ContactPoint';
  }
};


module.exports.ContactPointSchema = ContactPointSchema;
module.exports.ContactPoint = ContactPoint;
