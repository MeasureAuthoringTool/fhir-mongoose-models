const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');

const PractitionerQualificationSchema = BackboneElementSchemaFunction({
  identifier: [IdentifierSchema],
  code: CodeableConceptSchema,
  period: PeriodSchema,
  issuer: ReferenceSchema,
  typeName: { type: String, default: 'PractitionerQualification' },
  _type: { type: String, default: 'FHIR::PractitionerQualification' },
});

class PractitionerQualification extends mongoose.Document {
  constructor(object) {
    super(object, PractitionerQualificationSchema);
    this.typeName = 'PractitionerQualification';
    this._type = 'FHIR::PractitionerQualification';
  }
}

module.exports.PractitionerQualificationSchema = PractitionerQualificationSchema;
module.exports.PractitionerQualification = PractitionerQualification;
