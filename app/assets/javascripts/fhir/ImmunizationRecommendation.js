const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ImmunizationRecommendationRecommendationSchema } = require('./ImmunizationRecommendationRecommendation');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImmunizationRecommendationSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   patient : ReferenceSchema,
   date : DateTime,
   authority : ReferenceSchema,
   recommendation : [ImmunizationRecommendationRecommendationSchema],
   fhirTitle: { type: String, default: 'ImmunizationRecommendation' },
});

class ImmunizationRecommendation extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationRecommendationSchema);
    this._type = 'FHIR::ImmunizationRecommendation';
  }
};


module.exports.ImmunizationRecommendationSchema = ImmunizationRecommendationSchema;
module.exports.ImmunizationRecommendation = ImmunizationRecommendation;
