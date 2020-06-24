const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BiologicallyDerivedProductCollectionSchema = BackboneElementSchemaFunction({
   collector : ReferenceSchema,
   source : ReferenceSchema,
   collectedDateTime : DateTime,
   collectedPeriod : PeriodSchema,
   fhirTitle: { type: String, default: 'BiologicallyDerivedProductCollection' },
});

class BiologicallyDerivedProductCollection extends mongoose.Document {
  constructor(object) {
    super(object, BiologicallyDerivedProductCollectionSchema);
    this._type = 'FHIR::BiologicallyDerivedProductCollection';
  }
};


module.exports.BiologicallyDerivedProductCollectionSchema = BiologicallyDerivedProductCollectionSchema;
module.exports.BiologicallyDerivedProductCollection = BiologicallyDerivedProductCollection;
