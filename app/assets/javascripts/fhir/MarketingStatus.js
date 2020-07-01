const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');

const MarketingStatusSchema = BackboneElementSchemaFunction({
  country: CodeableConceptSchema,
  jurisdiction: CodeableConceptSchema,
  status: CodeableConceptSchema,
  dateRange: PeriodSchema,
  restoreDate: PrimitiveDateTimeSchema,
  typeName: { type: String, default: 'MarketingStatus' },
  _type: { type: String, default: 'FHIR::MarketingStatus' },
});

class MarketingStatus extends mongoose.Document {
  constructor(object) {
    super(object, MarketingStatusSchema);
    this.typeName = 'MarketingStatus';
    this._type = 'FHIR::MarketingStatus';
  }
}

module.exports.MarketingStatusSchema = MarketingStatusSchema;
module.exports.MarketingStatus = MarketingStatus;
