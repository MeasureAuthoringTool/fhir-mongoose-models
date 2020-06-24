const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TerminologyCapabilitiesImplementationSchema = BackboneElementSchemaFunction({
   description : String,
   url : String,
   fhirTitle: { type: String, default: 'TerminologyCapabilitiesImplementation' },
});

class TerminologyCapabilitiesImplementation extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesImplementationSchema);
    this._type = 'FHIR::TerminologyCapabilitiesImplementation';
  }
};


module.exports.TerminologyCapabilitiesImplementationSchema = TerminologyCapabilitiesImplementationSchema;
module.exports.TerminologyCapabilitiesImplementation = TerminologyCapabilitiesImplementation;
