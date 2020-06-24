const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GroupCharacteristicSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   valueCodeableConcept : CodeableConceptSchema,
   valueBoolean : Boolean,
   valueQuantity : QuantitySchema,
   valueRange : RangeSchema,
   valueReference : ReferenceSchema,
   exclude : Boolean,
   period : PeriodSchema,
   fhirTitle: { type: String, default: 'GroupCharacteristic' },
});

class GroupCharacteristic extends mongoose.Document {
  constructor(object) {
    super(object, GroupCharacteristicSchema);
    this._type = 'FHIR::GroupCharacteristic';
  }
};


module.exports.GroupCharacteristicSchema = GroupCharacteristicSchema;
module.exports.GroupCharacteristic = GroupCharacteristic;
