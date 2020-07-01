const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { LinkTypeSchema } = require('./LinkType');
const { ReferenceSchema } = require('./Reference');

const PatientLinkSchema = BackboneElementSchemaFunction({
  other: ReferenceSchema,
  type: LinkTypeSchema,
  typeName: { type: String, default: 'PatientLink' },
  _type: { type: String, default: 'FHIR::PatientLink' },
});

class PatientLink extends mongoose.Document {
  constructor(object) {
    super(object, PatientLinkSchema);
    this.typeName = 'PatientLink';
    this._type = 'FHIR::PatientLink';
  }
}

module.exports.PatientLinkSchema = PatientLinkSchema;
module.exports.PatientLink = PatientLink;
