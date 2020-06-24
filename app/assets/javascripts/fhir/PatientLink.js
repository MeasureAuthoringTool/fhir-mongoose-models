const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { LinkTypeSchema } = require('./LinkType');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PatientLinkSchema = BackboneElementSchemaFunction({
   other : ReferenceSchema,
   type : LinkTypeSchema,
   fhirTitle: { type: String, default: 'PatientLink' },
});

class PatientLink extends mongoose.Document {
  constructor(object) {
    super(object, PatientLinkSchema);
    this._type = 'FHIR::PatientLink';
  }
};


module.exports.PatientLinkSchema = PatientLinkSchema;
module.exports.PatientLink = PatientLink;
