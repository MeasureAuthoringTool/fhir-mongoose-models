const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ElementSchema } = require('./Element');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const UsageContextSchema = ElementSchemaFunction({
   code : CodingSchema,
   valueCodeableConcept : CodeableConceptSchema,
   valueQuantity : QuantitySchema,
   valueRange : RangeSchema,
   valueReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'UsageContext' },
});

class UsageContext extends mongoose.Document {
  constructor(object) {
    super(object, UsageContextSchema);
    this._type = 'FHIR::UsageContext';
  }
};


module.exports.UsageContextSchema = UsageContextSchema;
module.exports.UsageContext = UsageContext;
