const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { QuantitySchema } = require('./Quantity');

const SubstanceAmountReferenceRangeSchema = ElementSchemaFunction({
  lowLimit: QuantitySchema,
  highLimit: QuantitySchema,
  typeName: { type: String, default: 'SubstanceAmountReferenceRange' },
  _type: { type: String, default: 'FHIR::SubstanceAmountReferenceRange' },
});

class SubstanceAmountReferenceRange extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceAmountReferenceRangeSchema);
    this.typeName = 'SubstanceAmountReferenceRange';
    this._type = 'FHIR::SubstanceAmountReferenceRange';
  }
}

module.exports.SubstanceAmountReferenceRangeSchema = SubstanceAmountReferenceRangeSchema;
module.exports.SubstanceAmountReferenceRange = SubstanceAmountReferenceRange;
