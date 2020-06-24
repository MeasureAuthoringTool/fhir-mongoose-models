const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PublicationStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'PublicationStatus' },
});

class PublicationStatus extends mongoose.Document {
  constructor(object) {
    super(object, PublicationStatusSchema);
    this._type = 'FHIR::PublicationStatus';
  }
};


module.exports.PublicationStatusSchema = PublicationStatusSchema;
module.exports.PublicationStatus = PublicationStatus;
