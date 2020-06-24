const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PractitionerQualificationSchema = BackboneElementSchemaFunction({
   identifier : [IdentifierSchema],
   code : CodeableConceptSchema,
   period : PeriodSchema,
   issuer : ReferenceSchema,
   fhirTitle: { type: String, default: 'PractitionerQualification' },
});

class PractitionerQualification extends mongoose.Document {
  constructor(object) {
    super(object, PractitionerQualificationSchema);
    this._type = 'FHIR::PractitionerQualification';
  }
};


module.exports.PractitionerQualificationSchema = PractitionerQualificationSchema;
module.exports.PractitionerQualification = PractitionerQualification;
