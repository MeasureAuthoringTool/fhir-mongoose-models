const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductSpecialDesignationSchema = BackboneElementSchemaFunction({
   identifier : [IdentifierSchema],
   type : CodeableConceptSchema,
   intendedUse : CodeableConceptSchema,
   indicationCodeableConcept : CodeableConceptSchema,
   indicationReference : ReferenceSchema,
   status : CodeableConceptSchema,
   date : DateTime,
   species : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'MedicinalProductSpecialDesignation' },
});

class MedicinalProductSpecialDesignation extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductSpecialDesignationSchema);
    this._type = 'FHIR::MedicinalProductSpecialDesignation';
  }
};


module.exports.MedicinalProductSpecialDesignationSchema = MedicinalProductSpecialDesignationSchema;
module.exports.MedicinalProductSpecialDesignation = MedicinalProductSpecialDesignation;
