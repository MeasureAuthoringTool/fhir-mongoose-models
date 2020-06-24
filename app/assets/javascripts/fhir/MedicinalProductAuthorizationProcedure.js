const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductAuthorizationProcedureSchema = BackboneElementSchemaFunction({
   identifier : IdentifierSchema,
   type : CodeableConceptSchema,
   datePeriod : PeriodSchema,
   dateDateTime : DateTime,
   application : [MedicinalProductAuthorizationProcedureSchema],
   fhirTitle: { type: String, default: 'MedicinalProductAuthorizationProcedure' },
});

class MedicinalProductAuthorizationProcedure extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductAuthorizationProcedureSchema);
    this._type = 'FHIR::MedicinalProductAuthorizationProcedure';
  }
};


module.exports.MedicinalProductAuthorizationProcedureSchema = MedicinalProductAuthorizationProcedureSchema;
module.exports.MedicinalProductAuthorizationProcedure = MedicinalProductAuthorizationProcedure;
