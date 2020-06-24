const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { QuantitySchema } = require('./Quantity');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceAmountReferenceRangeSchema = ElementSchemaFunction({
   lowLimit : QuantitySchema,
   highLimit : QuantitySchema,
   fhirTitle: { type: String, default: 'SubstanceAmountReferenceRange' },
});

class SubstanceAmountReferenceRange extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceAmountReferenceRangeSchema);
    this._type = 'FHIR::SubstanceAmountReferenceRange';
  }
};


module.exports.SubstanceAmountReferenceRangeSchema = SubstanceAmountReferenceRangeSchema;
module.exports.SubstanceAmountReferenceRange = SubstanceAmountReferenceRange;
