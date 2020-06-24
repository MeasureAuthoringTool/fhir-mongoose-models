const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { FlagStatusSchema } = require('./FlagStatus');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const FlagSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : FlagStatusSchema,
   category : [CodeableConceptSchema],
   code : CodeableConceptSchema,
   subject : ReferenceSchema,
   period : PeriodSchema,
   encounter : ReferenceSchema,
   author : ReferenceSchema,
   fhirTitle: { type: String, default: 'Flag' },
});

class Flag extends mongoose.Document {
  constructor(object) {
    super(object, FlagSchema);
    this._type = 'FHIR::Flag';
  }
};


module.exports.FlagSchema = FlagSchema;
module.exports.Flag = Flag;
