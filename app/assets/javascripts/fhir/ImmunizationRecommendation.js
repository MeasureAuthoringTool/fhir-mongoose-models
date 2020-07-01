const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ImmunizationRecommendationRecommendationSchema } = require('./ImmunizationRecommendationRecommendation');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const ImmunizationRecommendationSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  patient: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  authority: ReferenceSchema,
  recommendation: [ImmunizationRecommendationRecommendationSchema],
  typeName: { type: String, default: 'ImmunizationRecommendation' },
  _type: { type: String, default: 'FHIR::ImmunizationRecommendation' },
});

class ImmunizationRecommendation extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationRecommendationSchema);
    this.typeName = 'ImmunizationRecommendation';
    this._type = 'FHIR::ImmunizationRecommendation';
  }
}

module.exports.ImmunizationRecommendationSchema = ImmunizationRecommendationSchema;
module.exports.ImmunizationRecommendation = ImmunizationRecommendation;
