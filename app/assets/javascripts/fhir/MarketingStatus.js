const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MarketingStatusSchema = BackboneElementSchemaFunction({
   country : CodeableConceptSchema,
   jurisdiction : CodeableConceptSchema,
   status : CodeableConceptSchema,
   dateRange : PeriodSchema,
   restoreDate : DateTime,
   fhirTitle: { type: String, default: 'MarketingStatus' },
});

class MarketingStatus extends mongoose.Document {
  constructor(object) {
    super(object, MarketingStatusSchema);
    this._type = 'FHIR::MarketingStatus';
  }
};


module.exports.MarketingStatusSchema = MarketingStatusSchema;
module.exports.MarketingStatus = MarketingStatus;
