const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimProcedureSchema = BackboneElementSchemaFunction({
   sequence : Number,
   type : [CodeableConceptSchema],
   date : DateTime,
   procedureCodeableConcept : CodeableConceptSchema,
   procedureReference : ReferenceSchema,
   udi : [ReferenceSchema],
   fhirTitle: { type: String, default: 'ClaimProcedure' },
});

class ClaimProcedure extends mongoose.Document {
  constructor(object) {
    super(object, ClaimProcedureSchema);
    this._type = 'FHIR::ClaimProcedure';
  }
};


module.exports.ClaimProcedureSchema = ClaimProcedureSchema;
module.exports.ClaimProcedure = ClaimProcedure;
