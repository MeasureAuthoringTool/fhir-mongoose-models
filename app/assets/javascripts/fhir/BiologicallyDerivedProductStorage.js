const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BiologicallyDerivedProductStorageScaleSchema } = require('./BiologicallyDerivedProductStorageScale');
const { PeriodSchema } = require('./Period');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BiologicallyDerivedProductStorageSchema = BackboneElementSchemaFunction({
   description : String,
   temperature : Number,
   scale : BiologicallyDerivedProductStorageScaleSchema,
   duration : PeriodSchema,
   fhirTitle: { type: String, default: 'BiologicallyDerivedProductStorage' },
});

class BiologicallyDerivedProductStorage extends mongoose.Document {
  constructor(object) {
    super(object, BiologicallyDerivedProductStorageSchema);
    this._type = 'FHIR::BiologicallyDerivedProductStorage';
  }
};


module.exports.BiologicallyDerivedProductStorageSchema = BiologicallyDerivedProductStorageSchema;
module.exports.BiologicallyDerivedProductStorage = BiologicallyDerivedProductStorage;
